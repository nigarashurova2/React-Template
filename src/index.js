import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configuraStore';
import {addBlog,removeBlog,editBlog} from './actions/blogs';

const store  =  configureStore();

store.subscribe(()=>{
    console.log(store.getState());
});

const blog1 = store.dispatch(addBlog({title:"b1",description:"desc1"}));
const blog2 = store.dispatch(addBlog({title:"b2",description:"desc2", dateAdded: Date.now()}));
// const blog3 = store.dispatch(addBlog({title:"b3",description:"desc2", dateAdded: Date.now()}));
  store.dispatch(addBlog({title:"b2",description:"desc2", dateAdded: Date.now()}));
store.dispatch(addBlog({title:"b2",description:"desc2", dateAdded: Date.now()}));
store.dispatch(removeBlog({id: blog1.blog.id}))
store.dispatch(editBlog(blog2.blog.id, {title: 'update'}))

const App = ()=>{
    return(
        <Provider store={store}>
            <AppRouter />
        </Provider>
    )
}
ReactDOM.render(<App />, document.getElementById('root'));
