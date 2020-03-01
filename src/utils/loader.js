import React from 'react'
import Loadable from 'react-loadable'
import { Spin } from 'antd'
const loadings = () => <div className="SpinBox"><Spin className="Spin_inside"/>
<br/>
	<span style={{color:"blue",fontSize:"0.25rem"}}>
		...Loading
	</span>
</div>
export default (loader, loading = loadings) => {
	return Loadable({
		loader,
		loading
	})
}