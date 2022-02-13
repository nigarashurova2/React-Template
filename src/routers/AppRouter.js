import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from '../components/Header'
import Home from '../components/HomePage'
import BlogListPage from '../components/BlogListPage'
import BlogDetailsPage from '../components/BlogDetailsPage'
import ContactPage from '../components/ContactPage'
import NotFoundPage from '../components/NotFoundPage'

const AppRouter = () => {
    return (
        <BrowserRouter>
                <div>
                    <Header></Header>
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route exact path="/blogs" component={BlogListPage}></Route>
                        <Route path="/blogs/:id" component={BlogDetailsPage}></Route>
                        <Route path="/contact" component={ContactPage}></Route>
                        <Route component={NotFoundPage}></Route>
                    </Switch>

                </div>
        </BrowserRouter>
            
    )
}

export default AppRouter