
import { ArrowRight, TrendingUp, BarChart3 } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero is-medium">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-6">
              <h1 className="title is-2 mb-4">
                Invest smarter, grow faster with <span className="gradient-text">NURAL</span>
              </h1>
              <p className="subtitle is-4 mb-5">
                We revolutionize the way you manage investments and financial strategies, providing cutting-edge technology and insightful analytics to help you achieve your financial goals.
              </p>
              <div className="buttons">
                <a className="button is-neural is-medium">
                  <span>Start Your Journey</span>
                  <span className="icon">
                    <ArrowRight />
                  </span>
                </a>
                <a className="button is-neural-outline is-medium">
                  Learn More
                </a>
              </div>
              <p className="mt-4 has-text-grey-light is-size-7">
                Join thousands who trust us to simplify investments and maximize returns.
              </p>
            </div>
            
            <div className="column is-6 is-hidden-mobile animate-float">
              <div className="box neural-shadow p-5 has-background-white">
                <div className="mb-4">
                  <div className="level">
                    <div className="level-left">
                      <div className="level-item">
                        <h3 className="is-size-5 has-text-weight-bold">Portfolio Performance</h3>
                      </div>
                    </div>
                    <div className="level-right">
                      <div className="level-item">
                        <span className="has-text-success is-flex is-align-items-center">
                          <TrendingUp className="mr-1" size={16} />
                          +24.8%
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="chart-container has-background-light p-4 is-flex is-align-items-end" style={{ height: "160px" }}>
                  <div className="chart-bar bg-neural-300" style={{ width: "16.6%", height: "25%", margin: "0 4px", borderTopLeftRadius: "4px", borderTopRightRadius: "4px", backgroundColor: "#FFB366" }}></div>
                  <div className="chart-bar bg-neural-400" style={{ width: "16.6%", height: "50%", margin: "0 4px", borderTopLeftRadius: "4px", borderTopRightRadius: "4px", backgroundColor: "#FF9933" }}></div>
                  <div className="chart-bar bg-neural-500" style={{ width: "16.6%", height: "75%", margin: "0 4px", borderTopLeftRadius: "4px", borderTopRightRadius: "4px", backgroundColor: "#FA6101" }}></div>
                  <div className="chart-bar bg-neural-600" style={{ width: "16.6%", height: "67%", margin: "0 4px", borderTopLeftRadius: "4px", borderTopRightRadius: "4px", backgroundColor: "#CC4E00" }}></div>
                  <div className="chart-bar bg-neural-700" style={{ width: "16.6%", height: "83%", margin: "0 4px", borderTopLeftRadius: "4px", borderTopRightRadius: "4px", backgroundColor: "#9E3B00" }}></div>
                  <div className="chart-bar bg-neural-800" style={{ width: "16.6%", height: "100%", margin: "0 4px", borderTopLeftRadius: "4px", borderTopRightRadius: "4px", backgroundColor: "#702A00" }}></div>
                </div>
                
                <div className="level is-mobile mt-2">
                  <div className="level-item has-text-grey is-size-7">Jan</div>
                  <div className="level-item has-text-grey is-size-7">Feb</div>
                  <div className="level-item has-text-grey is-size-7">Mar</div>
                  <div className="level-item has-text-grey is-size-7">Apr</div>
                  <div className="level-item has-text-grey is-size-7">May</div>
                  <div className="level-item has-text-grey is-size-7">Jun</div>
                </div>
                
                <div className="is-flex is-align-items-center mt-3">
                  <BarChart3 className="has-text-neural-dark mr-2" size={20} />
                  <span className="is-size-7 has-text-grey">Asset Growth Trend</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
