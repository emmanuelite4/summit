/** @format */

import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {GlobalStyle} from "./components/common/styles/global.js";
import ScrollToTop from "./helper/ScrollToTop";
import HomeOne from "./HomeOne";
import HomeTwo from "./HomeTwo";
import PageNotFound from "./pages/404/PageNotFound";
// import About from "./pages/about/About";
// import Login from "./pages/account/Login";
// import Register from "./pages/account/Register";
// import Alumni from "./pages/alumni/AlumniDetails";
// import BlogClassic from "./pages/blog/BlogClassic";
// import BlogDetails from "./pages/blog/BlogDetails";
// import BlogGrid from "./pages/blog/BlogGrid";
// import BusinessVenturesDetails from "./pages/businessventures/BusinessVenturesDetails";
// import ComingSoon from "./pages/comingsoon/ComingSoon";
// import Contact from "./pages/contact/Contact";
// import CourseDetails from "./pages/courses/CourseDetails";
// import CourseGrid from "./pages/courses/CourseGrid";
// import CommunalGrid from "./pages/courses/CourseGridCategory1";
// import OthersGrid from "./pages/courses/CourseGridCategory2";
// import SpecialGrid from "./pages/courses/CourseGridCategory3";
// import RecognitionGrid from "./pages/courses/CourseGridCategory4";
// import ScholarGrid from "./pages/courses/CourseGridCategory5";
// import AcadGrid from "./pages/courses/CourseGridCategory6";
// import CourseList from "./pages/courses/CourseList";
// import EndowmentDetails from "./pages/endowment/EndowmentDetails";
// import Events from "./pages/events/Events";
// import EventDetails from "./pages/events/EventsDetails";
// import Faq from "./pages/faq/Faq";
// import Gallery from "./pages/gallery/Gallery";
// import InstructorDetails from "./pages/instructor/InstructorDetails";
// import Instructor from "./pages/instructor/Instructors";
// import InternationalRelationsDetails from "./pages/internationalRelations/InternationalRelationsDetails";
// import InvestmentDetails from "./pages/investment/InvestmentDetails";
// import Legacies from "./pages/legacies/LegaciesDetails";
// import ProfessorialChairsDetails from "./pages/professorialchairs/ProfessorialChairsDetails";
// import ResearchGrantsDetails from "./pages/researchgrants/ResearchGrantsDetails";
// import Cart from "./pages/shop/Cart";
// import ProductDetails from "./pages/shop/ProductDetails";
// import Product from "./pages/shop/Products";
// import StudentsAffairsDetails from "./pages/studentsaffairs/StudentsAffairsDetails";
// import StudentScholarshipDetails from "./pages/studentscholarship/StudentScholarshipDetails";

function App() {
	return (
		<Router>
			<GlobalStyle />
			<ScrollToTop />
			<Switch>
				<Route
					exact
					path="/"
					component={HomeOne}
				/>
				<Route
					path="/services"
					component={HomeTwo}
				/>
				{/* <Route
					path={`${process.env.PUBLIC_URL + "/about"}`}
					component={About}
				/>
				<Route
					path={`${process.env.PUBLIC_URL + "/projects"}`}
					component={CourseGrid}
				/>
				<Route
					path={`${process.env.PUBLIC_URL + "/projects-communal-use"}`}
					component={CommunalGrid}
				/>
				<Route
					path={`${process.env.PUBLIC_URL + "/projects-others"}`}
					component={OthersGrid}
				/>
				<Route
					path={`${process.env.PUBLIC_URL + "/projects-special-use"}`}
					component={SpecialGrid}
				/>
				<Route
					path={`${process.env.PUBLIC_URL + "/projects-scholars-recognition"}`}
					component={RecognitionGrid}
				/>
				<Route
					path={`${
						process.env.PUBLIC_URL + "/projects-scholarship-and-prizes"
					}`}
					component={ScholarGrid}
				/>
				<Route
					path={`${process.env.PUBLIC_URL + "/projects-academic-centres"}`}
					component={AcadGrid}
				/>
				<Route
					path={`${process.env.PUBLIC_URL + "/course-list"}`}
					component={CourseList}
				/> */}
				{/* <Route
					path={`${process.env.PUBLIC_URL + "/projects-details"}`}
					component={CourseDetails}
				/> */}
				{/* <Route
					path={`${process.env.PUBLIC_URL + "/project/:courseLink"}`}
					component={CourseDetails}
				/>
				<Route
					path={`${process.env.PUBLIC_URL + "/instructor"}`}
					component={Instructor}
				/>
				<Route
					path={`${process.env.PUBLIC_URL + "/instructor-details"}`}
					component={InstructorDetails}
				/>
				<Route
					path={`${process.env.PUBLIC_URL + "/gallery"}`}
					component={Gallery}
				/>
				<Route
					path={`${process.env.PUBLIC_URL + "/events"}`}
					component={Events}
				/>
				<Route
					path={`${process.env.PUBLIC_URL + "/event-details"}`}
					component={EventDetails}
				/>
				<Route
					path={`${process.env.PUBLIC_URL + "/login"}`}
					component={Login}
				/>
				<Route
					path={`${process.env.PUBLIC_URL + "/registration"}`}
					component={Register}
				/>
				<Route
					path={`${process.env.PUBLIC_URL + "/contact"}`}
					component={Contact}
				/>
				<Route path={`${process.env.PUBLIC_URL + "/faq"}`} component={Faq} />
				<Route
					path={`${process.env.PUBLIC_URL + "/404"}`}
					component={PageNotFound}
				/>
				<Route
					path={`${process.env.PUBLIC_URL + "/next-event"}`}
					component={ComingSoon}
				/>
				<Route
					path={`${process.env.PUBLIC_URL + "/blog-classic"}`}
					component={BlogClassic}
				/> */}
				{/* <Route
					path={`${process.env.PUBLIC_URL + "/blog-grid"}`}
					component={BlogGrid}
				/> */}
				{/* <Route
					path={`${process.env.PUBLIC_URL + "/news"}`}
					component={BlogGrid}
				/>
				<Route
					path={`${process.env.PUBLIC_URL + "/news-details/:postLink"}`}
					component={BlogDetails}
				/>
				<Route
					path={`${process.env.PUBLIC_URL + "/endowment"}`}
					component={EndowmentDetails}
				/>
				<Route
					path={`${process.env.PUBLIC_URL + "/research-grants"}`}
					component={ResearchGrantsDetails}
				/>
				<Route
					path={`${process.env.PUBLIC_URL + "/professorial-chairs"}`}
					component={ProfessorialChairsDetails}
				/>
				<Route
					path={`${process.env.PUBLIC_URL + "/international-relations"}`}
					component={InternationalRelationsDetails}
				/>
				<Route
					path={`${process.env.PUBLIC_URL + "/students-scholarship"}`}
					component={StudentScholarshipDetails}
				/>
				<Route
					path={`${process.env.PUBLIC_URL + "/investment"}`}
					component={InvestmentDetails}
				/>
				<Route
					path={`${process.env.PUBLIC_URL + "/students-affairs"}`}
					component={StudentsAffairsDetails}
				/>
				<Route
					path={`${process.env.PUBLIC_URL + "/business-ventures"}`}
					component={BusinessVenturesDetails}
				/>
				<Route
					path={`${process.env.PUBLIC_URL + "/legacies"}`}
					component={Legacies}
				/>
				<Route
					path={`${process.env.PUBLIC_URL + "/alumni"}`}
					component={Alumni}
				/>
				<Route
					path={`${process.env.PUBLIC_URL + "/products"}`}
					component={Product}
				/>
				<Route
					path={`${process.env.PUBLIC_URL + "/product-details"}`}
					component={ProductDetails}
				/>
				<Route path={`${process.env.PUBLIC_URL + "/cart"}`} component={Cart} /> */}
				<Route path={`*`} component={PageNotFound} />
			</Switch>
		</Router>
	);
}

export default App;
