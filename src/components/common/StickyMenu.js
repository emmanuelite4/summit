/** @format */

import React, {useEffect} from "react";
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Styles} from "./styles/stickyMenu.js";

function StickyMenu() {
	useEffect(() => {
		window.addEventListener("scroll", () => {
			const stickyMenu = document.querySelector(".sticky-menu");

			if (window.scrollY > 160) {
				stickyMenu.classList.add("sticky");
			} else {
				stickyMenu.classList.remove("sticky");
			}
		});
	});

	return (
		<Styles>
			{/* Sticky Menu */}
			<section className="sticky-menu">
				<Container>
					<Row>
						<Col md="3">
							<div className="logo">
								<Link to={process.env.PUBLIC_URL + "/"}>
									<img
										style={{objectFit: "cover", width: "20%", height: "20%"}}
										src={process.env.PUBLIC_URL + "/assets/images/logo.png"}
										alt=""
									/>
								</Link>
							</div>
						</Col>
						<Col md="9">
							<div className="menu-box d-flex justify-content-end">
								<ul className="nav menu-nav">
									<li className="nav-item dropdown">
										<Link
											className="nav-link dropdown-toggle"
											to={process.env.PUBLIC_URL + "/home-two"}
											data-toggle="dropdown"
										>
											Services<i className="las la-angle-down"></i>
										</Link>
										<ul className="dropdown list-unstyled">
											<li className="nav-item">
												<Link
													className="nav-link"
													to={process.env.PUBLIC_URL + "/endowment"}
												>
													Endowment
												</Link>
											</li>
											<li className="nav-item">
												<Link
													className="nav-link"
													to={process.env.PUBLIC_URL + "/research-grants"}
												>
													Research Grants
												</Link>
											</li>
											<li className="nav-item">
												<Link
													className="nav-link"
													to={process.env.PUBLIC_URL + "/professorial-chairs"}
												>
													Professorial Chairs
												</Link>
											</li>
											<li className="nav-item">
												<Link
													className="nav-link"
													to={process.env.PUBLIC_URL + "/students-scholarship"}
												>
													Students' Scholarship
												</Link>
											</li>
											<li className="nav-item">
												<Link
													className="nav-link"
													to={process.env.PUBLIC_URL + "/investment"}
												>
													Investment
												</Link>
											</li>
											{/* <li className="nav-item">
												<Link
													className="nav-link"
													to={process.env.PUBLIC_URL + "/students-affairs"}
												>
													Students' Affairs
												</Link>
											</li> */}
											<li className="nav-item">
												<Link
													className="nav-link"
													to={process.env.PUBLIC_URL + "/business-ventures"}
												>
													Business Ventures
												</Link>
											</li>
										</ul>
									</li>
									<li className="nav-item dropdown">
										<Link
											className="nav-link dropdown-toggle"
											to={process.env.PUBLIC_URL + "/projects"}
											data-toggle="dropdown"
										>
											Projects
										</Link>
									</li>
									<li className="nav-item dropdown">
										<Link
											className="nav-link dropdown-toggle"
											to={process.env.PUBLIC_URL + "/legacies"}
											data-toggle="dropdown"
										>
											Legacies
										</Link>
									</li>
									<li className="nav-item dropdown">
										<Link
											className="nav-link dropdown-toggle"
											to={process.env.PUBLIC_URL + "/alumni"}
											data-toggle="dropdown"
										>
											Alumni
										</Link>
									</li>
									<li className="nav-item dropdown">
										<Link
											className="nav-link dropdown-toggle"
											to={process.env.PUBLIC_URL + "/blog-grid"}
											data-toggle="dropdown"
										>
											News
										</Link>
									</li>
									<li className="nav-item dropdown">
										<Link
											className="nav-link dropdown-toggle"
											to={process.env.PUBLIC_URL + "/contact"}
											data-toggle="dropdown"
										>
											Contact
										</Link>
									</li>
								</ul>
								<div className="apply-btn">
									<Link to={process.env.PUBLIC_URL + "/registration"}>
										<i className="las la-clipboard-list"></i>Give Now
									</Link>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</section>
		</Styles>
	);
}

export default StickyMenu;
