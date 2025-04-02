
import { ChartLine, Briefcase, Users, BookOpen, DollarSign, GraduationCap } from "lucide-react";

export const services = [
  {
    id: "trading-coaching",
    icon: ChartLine,
    title: "Trading Coaching",
    description: "Personalized one-on-one coaching sessions to develop your trading strategy and improve your market analysis skills.",
    fullDescription: "Our Trading Coaching program offers personalized one-on-one sessions with experienced traders who understand the complexities of financial markets. We work with you to develop a trading strategy that fits your financial goals, risk tolerance, and schedule. Whether you're a complete beginner looking to understand the basics or an experienced trader wanting to refine your approach, our coaches will help you improve your market analysis skills, develop robust trading systems, and implement effective risk management techniques.",
    benefits: [
      "Personalized trading strategy development",
      "Real-time market analysis techniques",
      "Technical and fundamental analysis training",
      "Risk management optimization",
      "Trading psychology guidance",
      "Performance tracking and improvement"
    ],
    pricing: "From $199/session or $899/month for weekly sessions"
  },
  {
    id: "asset-management",
    icon: Briefcase,
    title: "Asset Management",
    description: "Professional management of your stock portfolio with a focus on long-term growth and risk mitigation.",
    fullDescription: "Our Asset Management service provides professional oversight of your investment portfolio with a focus on long-term growth and risk mitigation. Our team of experienced portfolio managers use sophisticated analysis and market insights to make strategic investment decisions on your behalf. We take a holistic approach to managing your assets, considering your financial goals, time horizon, and risk tolerance. Through diversification, strategic allocation, and continuous monitoring, we aim to optimize your returns while protecting your capital from market volatility.",
    benefits: [
      "Professional portfolio construction and management",
      "Strategic asset allocation",
      "Regular portfolio rebalancing",
      "Comprehensive risk assessment",
      "Continuous market monitoring",
      "Quarterly performance reports"
    ],
    pricing: "1% annual fee on assets under management (minimum $100,000 investment)"
  },
  {
    id: "trading-education",
    icon: GraduationCap,
    title: "Trading Education",
    description: "Comprehensive courses and resources to help you understand market dynamics and trading principles.",
    fullDescription: "Our Trading Education programs offer comprehensive courses and resources designed to help you understand market dynamics and master trading principles. Whether you're just starting out or looking to advance your knowledge, our structured curriculum provides clear, practical information that you can apply immediately. Our courses cover everything from basic market mechanics to advanced trading strategies, taught by instructors with years of real trading experience. We emphasize practical application over theory, ensuring you develop skills that translate directly to the trading screen.",
    benefits: [
      "Structured curriculum from basics to advanced topics",
      "Video lessons, webinars, and interactive sessions",
      "Real-world case studies and examples",
      "Practical trading exercises and simulations",
      "Access to proprietary trading tools and resources",
      "Community of fellow traders for support and networking"
    ],
    pricing: "From $499 for basic courses to $1,999 for comprehensive programs"
  },
  {
    id: "strategy-development",
    icon: BookOpen,
    title: "Strategy Development",
    description: "Custom trading strategies tailored to your financial goals, risk tolerance, and market conditions.",
    fullDescription: "Our Strategy Development service creates custom trading approaches tailored specifically to your financial goals, risk tolerance, and preferred market conditions. We start by understanding your unique situation and objectives, then leverage our expertise to design a trading strategy that works for you. Our strategies incorporate rigorous backtesting, clear entry and exit rules, and robust risk management guidelines. We don't just deliver a strategy—we work with you to ensure you understand how to implement it effectively and adapt it as markets evolve.",
    benefits: [
      "Customized strategy based on your specific needs",
      "Comprehensive backtesting and optimization",
      "Clear entry, exit, and position sizing rules",
      "Integration with your existing workflow",
      "Strategy monitoring and adjustment guidance",
      "Implementation support and troubleshooting"
    ],
    pricing: "Starting at $1,499 for a comprehensive strategy package"
  },
  {
    id: "investment-planning",
    icon: DollarSign,
    title: "Investment Planning",
    description: "Strategic investment plans that align with your long-term financial objectives and market opportunities.",
    fullDescription: "Our Investment Planning service helps you create a strategic roadmap that aligns with your long-term financial objectives while capitalizing on market opportunities. We take a holistic view of your financial situation, considering not just your investment portfolio but your overall financial health, including retirement planning, tax considerations, and estate planning. Our advisors work with you to develop a comprehensive investment plan that balances growth with security, adapts to changing life circumstances, and helps you achieve your financial milestones on schedule.",
    benefits: [
      "Comprehensive financial situation analysis",
      "Goal-based investment strategy",
      "Retirement planning integration",
      "Tax-efficient investment recommendations",
      "Regular plan reviews and updates",
      "Coordination with other financial professionals"
    ],
    pricing: "Starting at $999 for a comprehensive investment plan"
  },
  {
    id: "group-workshops",
    icon: Users,
    title: "Group Workshops",
    description: "Interactive workshops where you can learn and collaborate with other traders under expert guidance.",
    fullDescription: "Our Group Workshops provide an interactive learning environment where you can develop your trading skills alongside other traders, all under expert guidance. These focused sessions combine structured learning with collaborative exercises, allowing you to gain insights not just from our instructors but from the experiences of your peers. Workshops cover specific topics like options trading, technical analysis, market psychology, or sector-specific strategies. The small-group format ensures you receive individual attention while benefiting from the diverse perspectives in the room.",
    benefits: [
      "Focused learning on specific trading topics",
      "Interactive exercises and real-time practice",
      "Networking with other traders at similar levels",
      "Direct feedback from expert instructors",
      "Collaborative problem-solving on trading challenges",
      "Ongoing community support after the workshop"
    ],
    pricing: "From $299 for half-day sessions to $999 for intensive weekend workshops"
  }
];

export const getServiceById = (id: string) => {
  return services.find(service => service.id === id) || null;
};
