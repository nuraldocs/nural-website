
import { Lightbulb, Target } from "lucide-react";

const MissionSection = () => {
  return (
    <section className="section has-background-neural-light">
      <div className="container">
        <div className="has-text-centered mb-6">
          <h2 className="title is-3">Our Mission & Vision</h2>
          <p className="subtitle is-5 has-text-grey-dark">
            Transforming the way the world invests—efficiently, transparently, and intelligently.
          </p>
        </div>

        <div className="columns is-variable is-8">
          <div className="column">
            <div className="box has-background-white">
              <div className="is-flex is-align-items-center mb-4">
                <span className="icon has-text-neural mr-3">
                  <Target size={32} />
                </span>
                <h3 className="title is-4">Our Mission</h3>
              </div>
              <p className="has-text-grey-dark">
                Our mission is to democratize investment opportunities by providing state-of-the-art financial solutions 
                that are easy to use, transparent, and tailored to individual and corporate needs. We strive to bridge 
                the gap between technology and finance, ensuring that our clients have the best tools to achieve 
                financial success.
              </p>
            </div>
          </div>

          <div className="column">
            <div className="box has-background-white">
              <div className="is-flex is-align-items-center mb-4">
                <span className="icon has-text-neural mr-3">
                  <Lightbulb size={32} />
                </span>
                <h3 className="title is-4">Our Vision</h3>
              </div>
              <p className="has-text-grey-dark">
                Our vision is to be the leading financial services platform that empowers investors with cutting-edge 
                technology, insightful analytics, and expert guidance. We aim to create a world where financial 
                independence is accessible to everyone through smart, simple, and innovative investment solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
