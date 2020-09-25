import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import App from "./App";
import Courses from "./Courses";
import Profile from "./Profile";
import PostDetails from "./PostDetails";
import EnquiryPage from "./EnquiryPage";
import AllEnquired from "./AllEnquired";


const Routing = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Route exact path="/" component={App}></Route>
        <Route exact path="/post" component={Courses}></Route>
        <Route exact path="/post/:course" component={PostDetails}></Route>
        <Route exact path="/post/:course/:enquiry" component={EnquiryPage}></Route>
        <Route exact path="/allEnquired" component={AllEnquired}></Route>
        <Route path="/profile" component={Profile}></Route>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default Routing;
