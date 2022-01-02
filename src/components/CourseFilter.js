/** @format */

import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Datas from "../data/course/filter.json";
import { Styles } from "./styles/courseFilter.js";

function CourseFilter() {
	useEffect(() => {
		const buttons = document.querySelector(".filter-btn-list").children;
		const items = document.querySelector(".filter-items").children;

		for (let i = 0; i < buttons.length; i++) {
			buttons[i].addEventListener("click", function () {
				for (let j = 0; j < buttons.length; j++) {
					buttons[j].classList.remove("active");
				}

				this.classList.add("active");
				const target = this.getAttribute("data-target");

				for (let k = 0; k < items.length; k++) {
					items[k].style.display = "none";

					if (items[k].getAttribute("data-id") === target) {
						items[k].style.display = "block";
					}

					if (target === "*") {
						items[k].style.display = "block";
					}
				}
			});
		}
	});

	return (
		<Styles>
			{/* Course Area */}
			<section className="course-filter">
				<Container>
					<Row>
						<Col md="12">
							<div className="sec-title text-center">
								<h4>{Datas.secTitle}</h4>
							</div>
						</Col>
						<Col md="12">
							<div className="filter-btns text-center">
								<ul className="filter-btn-list list-unstyled list inline">
									<li data-target="*" className="active list-inline-item">
										All
									</li>
									<li data-target="acad" className="list-inline-item">
										Academic Centres
									</li>
									<li data-target="sch" className="list-inline-item">
										Scholarship & Prizes
									</li>
									<li data-target="recog" className="list-inline-item">
										Scholar's Recognition
									</li>
									<li data-target="spec" className="list-inline-item">
										Special Use
									</li>
									<li data-target="comm" className="list-inline-item">
										Communal Use
									</li>
									<li data-target="other" className="list-inline-item">
										Others
									</li>
								</ul>
							</div>
							<Row className="filter-items">
								{Datas.dataList.map((data, i) => (
									<Col lg="4" md="6" key={i} data-id={data.targetId}>
										<div className="course-item">
											<Link
												to={process.env.PUBLIC_URL + data.courseLink + data.id}
											>
												<div
													className="course-image"
													style={{
														backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${data.imgUrl})`,
														width: "100%",
														objectFit: "cover",
													}}
												>
													{/* <div className="author-img d-flex">
														<div className="img">
															<img
																src={
																	process.env.PUBLIC_URL +
																	`/assets/images/${data.authorImg}`
																}
																alt=""
															/>
														</div>
														<div className="title">
															<p>{data.authorName}</p>
															<span>{data.authorCourses}</span>
														</div>
													</div> */}
													<div className="course-price">
														<p>{data.price}</p>
													</div>
												</div>
											</Link>
											<div className="course-content">
												<h6 className="heading">
													<Link to={process.env.PUBLIC_URL + data.courseLink}>
														{data.courseTitle}
													</Link>
												</h6>
												<p className="desc">{data.courseDesc}</p>
												<div className="course-face d-flex justify-content-between">
													<div className="duration">
														{/* <p>
															<i className="las la-clock"></i>120
														</p> */}
													</div>
													{/* <div className="rating">
														<ul className="list-unstyled list-inline">
															<li className="list-inline-item">
																<i className="las la-star"></i>
															</li>
															<li className="list-inline-item">
																<i className="las la-star"></i>
															</li>
															<li className="list-inline-item">
																<i className="las la-star"></i>
															</li>
															<li className="list-inline-item">
																<i className="las la-star"></i>
															</li>
															<li className="list-inline-item">
																<i className="las la-star-half-alt"></i>
															</li>
															<li className="list-inline-item">(4.5)</li>
														</ul>
													</div> */}
													<div className="student">
														<p>
															<i className="las la-chair"></i>60
														</p>
													</div>
												</div>
											</div>
										</div>
									</Col>
								))}
							</Row>
						</Col>
						<Col md="12" className="text-center">
							<div className="viewall-btn">
								<Link to={process.env.PUBLIC_URL + "/course-grid"}>
									View All Projects
								</Link>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</Styles>
	);
}

export default CourseFilter;
