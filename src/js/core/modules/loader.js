import * as R from 'ramda'

/**
 *
 * @function loader
 *
 * @param :promise -> behaviour => import(`@/behaviours/${behaviour}`)
 *
 * @return {Object}
 *
 */

export const gather = (fn, attr) =>
	R.compose(
		R.map(
			({ node, behaviour }) =>
				new Promise(resolve => {
					fn(behaviour).then(resp => {
						resolve({
							id: behaviour,
							node,
							behaviour: resp.default
						})
					})
				})
		),
		R.flatten,
		R.map(node =>
			R.compose(
				R.map(behaviour => ({
					behaviour,
					node
				})),
				R.split(' '),
				R.replace(/^\s+|\s+$|\s+(?=\s)/g, '')
			)(node.getAttribute(attr))
		)
	)

export default function loader(fn) {
	const state = {
		stack: [],
		scope: []
	}

	// get all of the data-behaviour props
	// return an array of behaviour objects
	const gatherBehaviours = gather(fn, 'data-behaviour')

	/**
	 * @public
	 *
	 * Get data behaviours and instantiate
	 *
	 * @function hydrate
	 *
	 * @param :HTMLElement
	 * @param {String} - css selector
	 *
	 * @return {Object}
	 *
	 */
	function hydrate(context, wrapper = '#page-wrapper') {
		return Promise.all(
			gatherBehaviours([...context.querySelectorAll('*[data-behaviour]')])
		).then(data => {
			const stack = R.map(({ behaviour: Behaviour, node, id }) => {
				const fn = new Behaviour(node, id)
				fn.init()
				setTimeout(() => {
					fn.mount()
				})
				const destroy = node.closest(wrapper)
				return { fn, destroy, id }
			})(data)

			const scope = R.compose(
				// R.filter(({ fn }) => typeof fn === 'function'),
				R.filter(item => item.destroy)
			)(stack)

			Object.assign(state, { stack, scope })

			return state
		})
	}

	/**
	 * @public
	 *
	 * destroy the behaviours
	 *
	 * @function unmount
	 *
	 * @return {void}e
	 *
	 */
	function unmount() {
		R.compose(
			R.forEach(({ fn }) => {
				fn.destroy()
			})
		)(state.scope)
	}

	return {
		hydrate,
		unmount
	}
}
