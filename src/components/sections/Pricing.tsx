import { pricingPlans } from "../../utils/pricing-plan";
import { Button } from "../shared/Button";
import { Container } from "../shared/Container";
import { Paragraph } from "../shared/Paragraph";
import { Title } from "../shared/Title";

export const Pricing = () => {
  return (
    <section id="pricing" className="py-16">
      <Container className="text-center max-w-3xl">
        <Title>Pricing</Title>
        <Paragraph className="mt-4 text-lg text-gray-400">
          Choose the plan that's right for your business.
        </Paragraph>
      </Container>

      <Container className="mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pricingPlans.map((plan, key) => (
            <div
              key={key}
              className="relative group h-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="bg-gradient-to-r from-blue-600 to-violet-600 p-[1px] rounded-3xl h-full">
                <div className="bg-box-bg border border-box-border rounded-3xl shadow-lg shadow-box-shadow p-8 flex flex-col h-full relative">
                  {plan.bestValue && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-violet-600 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                      Best Value
                    </div>
                  )}

                  <h3 className="text-2xl font-semibold text-heading-1 mb-4">
                    {plan.title}
                  </h3>

                  <p className="text-4xl font-bold text-heading-1">
                    <span className="align-top text-xl">$</span>
                    {plan.price}
                    <span className="text-lg text-gray-400">/mo</span>
                  </p>

                  <ul className="mt-6 flex-1 space-y-3 text-left text-heading-3">
                    {plan.features.map((feature, keyFeatures) => (
                      <li
                        key={keyFeatures}
                        className="flex items-center gap-2"
                      >
                        <span className="text-primary">✅</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8">
                    <Button className="w-full text-white">
                      Choose Plan
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};
