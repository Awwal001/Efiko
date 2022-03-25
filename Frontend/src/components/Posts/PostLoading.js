import React from 'react';
import Spinner from '../UI/Spinner/Spinner';

function PostLoading(Component) {
	return function PostLoadingComponent({ isLoading, ...props }){
		if (!isLoading) return <Component {...props} />;
		return(
			<div >
				<Spinner/>
			</div>
		);
	};
}

export default PostLoading;