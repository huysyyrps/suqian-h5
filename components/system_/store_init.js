let components = {}
let requireComponents=require.context('./store/', true, /\.js$/)
requireComponents.keys().forEach(path=>{
	let name = /\/(.*?).js/.exec(path)[1]
	let conponent = requireComponents(path)
	components[name] = conponent.default || conponent
})

export default components
