import * as React from "react";
import { Box } from "@material-ui/core";
import { EmployeeWrapper } from "../../../../shared/components/app-wrapper/employee/EmployeeWrapper";
import { PageWrapper } from "../../../../shared/components/app-wrapper/employee/PageWrapper";
import { PageHeaderWithImage } from "../../../../shared/components/PageHeaderWithImage";
import "./styles.css";

export const LeadershipSeries = () => {
  return (
    <EmployeeWrapper>
      <PageWrapper>
        <PageHeaderWithImage
          bg="https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/ethicslead.png"
          text="Ethics Leadership Series"
        />
        <Box>
          <div className="mtn__topic">
            <h3>Ethics Leadership Series</h3>
            <h4>Publish October 12, 2022</h4>
          </div>
          <Box style={{ display: "flex", height: "100px", width: "100%" }}>
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
                </ul>
                <br />
                <span>OUR VITAL BEHAVIOURS</span>
                <p>
                  As a global enterprise, we have collectively worked hard to
                  get to where we are today. How we interact with each other,
                  the values we uphold and the behaviours we demonstrate, shape
                  who we are and impacts our success. The four vital behaviours
                  that give expression to our values are:
                </p>
                <ul>
                  <li>
                    3. <strong>Get it done.</strong> When I notice problems or
                    risks, I take action to try to resolve them—or escalate when
                    I can’t—rather than waiting for someone else to notice them.
                  </li>

                  <li>
                    4. <strong>Active collaboration.</strong> I do not hesitate
                    to sacrifice time and resources to support colleagues,
                    within or outside my function, in the best interest of MTN.
                  </li>
                  <br />
                  <h4>B. EMPLOYEE CONDUCT PLEDGE</h4>
                  <p>
                    I therefore commit myself to the following fundamental
                    conduct expectations:
                  </p>
                </ul>
              </h5>
            </div>
          </Box>
        </Box>
      </PageWrapper>
    </EmployeeWrapper>
  );
};
