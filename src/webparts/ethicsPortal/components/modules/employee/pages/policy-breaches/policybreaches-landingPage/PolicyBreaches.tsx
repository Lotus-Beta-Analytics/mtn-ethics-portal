import * as React from "react";
import { EmployeeWrapper } from "../../../../shared/components/app-wrapper/employee/EmployeeWrapper";
import { LandingPageHeaderWithImage } from "../../../../shared/components/LandingPageHeaderWithImage";
import { Box } from "@material-ui/core";
import "./styles.css";

const pageMenu = [
  {
    id: 1,
    text: "Ethics Defaulters",
    link: "/policybreaches/ethicsdefaulters",
  },
];

export const PolicyBreaches = () => {
  return (
    <EmployeeWrapper
      pageNavigation={true}
      pageMenu={pageMenu}
      backButton={false}
      showFooter={false}
    >
      <LandingPageHeaderWithImage
        bg="https://mtncloud.sharepoint.com/sites/MTNAppDevelopment/ethicsportal/assets/mtn-policy.png"
        text="Learning from Policy Breaches"
      />
      <Box className="policyBody">
        <div className="policyBreaches">
          <span>
            <h4>Policy Breaches</h4>
          </span>
          <div className="policyPage">
            <h5>
              MTN believes that being good is good business, at every level of
              organisation – individual, team, and enterprise, and that the time
              is always right to do what is right. MTN therefore actively
              fosters a culture of ethical business conduct. We maintain a
              reputation of honesty, fairness and integrity and we oppose
              illegal or unethical conduct.
              <br />
              <br />
              <span>OUR VALUES</span> <br />
              <p>
                At MTN, our values guide our day-to-day behaviours and form the
                basis of how we interact with each other, our customers, the
                communities we operate in and all our other stakeholders.
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
                  Providing vision and guidance: proactively leading by example,
                  inspiring others, demonstrating ownership, passion and
                  dependability, being fair and caring.
                </li>
                <span>Innovation</span>
                <li>
                  Finding new ways of doing things and continually improving
                  ways things have always been done: being creative, original
                  and solution focused.
                </li>

                <span>Relationships</span>
                <li>
                  Positively working together to achieve our goals: embracing
                  differences and diversity, working as a team, respecting and
                  caring for one another, being cooperative and friendly, and
                  communicating clearly.
                </li>

                <span>Integrity</span>
                <li>
                  Consistently doing what is right: being honest, trustworthy
                  and reliable, and always delivering on your commitments. The
                  value of integrity directs all of our actions.
                </li>

                <span>Can-Do</span>
                <li>
                  Believing that anything is possible: believing in yourself and
                  being positive, having the courage to follow your convictions,
                  being an inspiration to others, being willing to persevere and
                  achieving performance excellence.
                </li>
              </ul>
              <br />
              <span>OUR VITAL BEHAVIOURS</span>
              <p>
                As a global enterprise, we have collectively worked hard to get
                to where we are today. How we interact with each other, the
                values we uphold and the behaviours we demonstrate, shape who we
                are and impacts our success. The four vital behaviours that give
                expression to our values are:
              </p>
              <ul>
                <li>
                  1. <strong>Complete candour.</strong> I openly and candidly
                  share my views—regardless of the level or position of the
                  person I am addressing.
                </li>

                <li>
                  2. <strong>Complete accountability.</strong> When I need to
                  hold people accountable to commitments and results, I speak to
                  them directly—regardless of whether they are peers, senior
                  leaders, direct reports or anybody else.
                </li>

                <li>
                  3. <strong>Get it done.</strong> When I notice problems or
                  risks, I take action to try to resolve them—or escalate when I
                  can’t—rather than waiting for someone else to notice them.
                </li>

                <li>
                  4. <strong>Active collaboration.</strong> I do not hesitate to
                  sacrifice time and resources to support colleagues, within or
                  outside my function, in the best interest of MTN.
                </li>
                <br />
                <h4>B. EMPLOYEE CONDUCT PLEDGE</h4>
                <p>
                  I therefore commit myself to the following fundamental conduct
                  expectations:
                </p>

                <li>
                  1. Hold MTN’s values as my own, follow company policies, and
                  procedures, obey the law, and apply universally-held
                  principles of all that is good and just.
                </li>

                <li>
                  2. Act with integrity – being honest, reliable and fair in my
                  actions, accepting responsibility for the consequences.
                </li>

                <li>3. Treat others as I wish to be treated by them.</li>

                <li>
                  4. Respect colleagues, suppliers and those we serve,
                  regardless of gender, race, religion, culture, mental and
                  physical abilities, and treat them with dignity, respect and
                  compassion.
                </li>

                <li>
                  5. Respect the moral maturity of others, and provide private
                  constructive feedback for inappropriate behaviour as a first
                  level of action.
                </li>

                <li>
                  6. Disclose to MTN any conflict of interest – wherever my
                  personal interests or the interests of an immediate or distant
                  family member or other person close to me may appear to
                  influence the objective exercise of my official duties as an
                  employee, or interfere with the interests of MTN,
                  understanding that such disclosure does not necessarily imply
                  impropriety.
                </li>
                <li>
                  7. Protect MTN’s reputation and not use company assets, name,
                  letterhead, logo or information for personal ends.
                </li>

                <li>
                  8. Not give or receive gifts or benefits in contravention of
                  MTN Group’s Gifts, Hospitality and Entertainment policy, nor
                  allow any gift or benefit to influence my business decisions.
                </li>
              </ul>
            </h5>
          </div>
        </div>
      </Box>
    </EmployeeWrapper>
  );
};
