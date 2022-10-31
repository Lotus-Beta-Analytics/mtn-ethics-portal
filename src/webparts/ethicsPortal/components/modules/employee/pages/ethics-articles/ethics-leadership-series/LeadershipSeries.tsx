import * as React from "react";
import { Box } from "@material-ui/core";
import { EmployeeWrapper } from "../../../../shared/components/app-wrapper/employee/EmployeeWrapper";
import { PageWrapper } from "../../../../shared/components/app-wrapper/employee/PageWrapper";
import { PageHeaderWithImage } from "../../../../shared/components/PageHeaderWithImage";
import "./styles.css";

export const LeadershipSeries = () => {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const current = new Date();
  const date = `${current.getDate()} ${
    months[current.getMonth()]
  } ${current.getFullYear()}`;

  return (
    <EmployeeWrapper showFooter={false}>
      <PageWrapper>
        <PageHeaderWithImage
          bg="https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/ethicslead.png"
          text="Ethics Leadership Series"
        />
        <Box
          style={{
            height: "200px",
            width: "100%",
            padding: "1rem",
            backgroundColor: "gray",
          }}
        >
          <div className="mtn__topic">
            <h3>Ethics Leadership Series</h3>
            <h4>Posted on {date}</h4>
          </div>
          <Box>
            <div className="mtn__blogBody">
              <h5>
                MTN believes that being good is good business, at every level of
                organisation – individual, team, and enterprise, and that th is
                always right to do what is right. MTN therefore actively fosters
                a culture of ethical business conduct. We maintain a reputation
                of honesty, fairness and integrity and we oppose illegal or
                unethical conduct.
                <br />
                <span>OUR VALUES</span> <br />
                <p>
                  At MTN, our values guide our day-to-day behaviours and form
                  the basis of how we interact with each other, our customers,
                  the communities we operate in and all our other stakeholders.
                  <br />
                  MTNers live the company’s values of acting with
                  <strong> integrity</strong>, providing{" "}
                  <strong> leadership</strong>, inspiring{" "}
                  <strong> innovation</strong>, cultivating{" "}
                  <strong>relationships </strong>and having a{" "}
                  <strong>“Can-Do” </strong>
                  attitude in all we do. The MTN values underpin our vision and
                  business strategies, defining how we get things done. These
                  values thus direct our conduct as individuals and as an
                  enterprise.
                </p>
                <ul>
                  <br />
                  <span>Leadership</span>
                  <li>
                    Providing vision and guidance: proactively leading by
                    example, inspiring others, demonstrating ownership, passion
                    and dependability, being fair and caring.
                  </li>
                  <span>Innovation</span>
                  <li>
                    Finding new ways of doing things and continually improving
                    ways things have always been done: being creative, original
                    and solution focused.
                  </li>
                  <li>
                    Finding new ways of doing things and continually improving
                    ways things have always been done: being creative, original
                    and solution focused.
                  </li>
                  <li>
                    Finding new ways of doing things and continually improving
                    ways things have always been done: being creative, original
                    and solution focused.
                  </li>
                  <li>
                    Finding new ways of doing things and continually improving
                    ways things have always been done: being creative, original
                    and solution focused.
                  </li>
                  <p>
                    Finding new ways of doing things and continually improving
                    ways things have always been done: being creative, original
                    and solution focused. Finding new ways of doing things and
                    continually improving ways things have always been done:
                    being creative, original and solution focused. Finding new
                    ways of doing things and continually improving ways things
                    have always been done: being creative, original and solution
                    focused. Finding new ways of doing things and continually
                    improving ways things have always been done: being creative,
                    original and solution focused. Finding new ways of doing
                    things and continually improving ways things have always
                    been done: being creative, original and solution focused.
                  </p>
                </ul>
                <br />
              </h5>
            </div>
          </Box>
        </Box>
      </PageWrapper>
    </EmployeeWrapper>
  );
};
