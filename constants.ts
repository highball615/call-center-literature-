import { Category, PaperData } from "./types";

export const PAPERS: PaperData[] = [
  {
    id: 1,
    title: "Finding the Right Number of Servers in Real-World Queuing Systems",
    category: Category.Staffing,
    rawText: `Authors: Winfried K. Grassmann. Journal: Informs Journal On Applied Analytics, 1988. Main models: Deterministic model (use when need quick cut for short rush windows), Infinite server model (use when want fast robust sizing), Equilibrium model (GI/G/s). Focuses on finding the right number of servers.`
  },
  {
    id: 2,
    title: "Understanding the Efficiency of Multi-Server Service Systems",
    category: Category.Staffing,
    rawText: `Management Science Vol 38 No 5 May 1992. Ward Whitt. Research Problem: Size multi-server systems so that congestion stays stable as scale grows. Design Principle: (1-rho)sqrt(s) = gamma. Square root staffing rule. Economics of scale. Efficiency-driven, Quality-driven, QED regimes.`
  },
  {
    id: 3,
    title: "Heavy-Traffic Limits for Queues with Many Exponential Servers",
    category: Category.Staffing,
    rawText: `Operations Research. Shlomo Halfin and Ward Whitt. 1981. Problem addressed: Classical regimes give extremes. Paper targets the typical many-server range with nontrivial delay probability. QED / Halfin-Whitt scaling. (1-rho)sqrt(s) -> beta. Service level alpha vs scale beta.`
  },
  {
    id: 4,
    title: "Telephone Call Centers: Tutorial, Review, and Research Prospects",
    category: Category.Routing,
    rawText: `Noah Gans, Ger Koole, Avishai Mandelbaum. Manufacturing & Service Operations Management, 2003. Tutorial on call center operations. Given Service Level Staffing. Erlang-A baseline. Skill-Based Routing. Call Blending.`
  },
  {
    id: 5,
    title: "On Customer Contact Centers with a Call-Back Option",
    category: Category.Routing,
    rawText: `Mor Armony, Constantinos Maglaras. Operations Research 2004. Two-class M/M/N systems. Class 1: Real-time. Class 2: Call-back. Rational Customer Choice. Asymptotically optimal routing rule. Threshold Rule.`
  },
  {
    id: 6,
    title: "Dimensioning Large Call Centers",
    category: Category.Staffing,
    rawText: `Sem Borst, Avi Mandelbaum, Martin I. Reiman. Operations Research 2004. Asymptotic Optimization. M/M/N Model with Cost Optimization. Three operating regimes: Rationalized, Efficiency-Driven, Quality-Driven. Square-root safety staffing principle.`
  },
  {
    id: 7,
    title: "Insights on Service System Design from a Normal Approximation to Erlang’s Delay Formula",
    category: Category.Staffing,
    rawText: `Peter J. Kolesar and Linda V. Green. Production and Operations Management 1998. Normal Approximation to Erlang's Delay Formula. s approx rho + z*sqrt(rho). Validated on police patrol, telemarketing.`
  },
  {
    id: 8,
    title: "Designing a Call Center with Impatient Customers",
    category: Category.Staffing,
    rawText: `O. Garnett, A. Mandelbaum, M. Reiman. M&SOM 2002. M/M/N + M model (Erlang-A). Incorporates customer abandonment. Square-Root Staffing Rule with Abandonment. Three Staffing Regimes.`
  },
  {
    id: 9,
    title: "What You Should Know About Queueing Models to Set Staffing Requirements",
    category: Category.Staffing,
    rawText: `Ward Whitt. Naval Research Logistics 2007. Time-Varying Demand. PSA (Pointwise Stationary Approx), MOL (Modified-Offered-Load), ISA (Iterative Staffing Algorithm). Infinite-server model insights.`
  },
  {
    id: 10,
    title: "Workload Forecasting for a Call Center: Methodology and a Case Study",
    category: Category.Forecasting,
    rawText: `Sivan Aldor-Noiman, Paul D. Feigin, Avishai Mandelbaum. Annals of Applied Statistics 2009. Gaussian Linear Mixed Model. Variance stabilization. Day-of-week, intra-day seasonality, inter-day correlation, exogenous variables (billing).`
  },
  {
    id: 11,
    title: "Call Center Staffing: Service-Level Constraints and Index Priorities",
    category: Category.Routing,
    rawText: `Seung Bum Soh, Itai Gurvich. Operations Research 2017. TSF problem. Index Priorities (heuristics) vs Optimal Tracking Policy. Suboptimality of index rules. Perfect Service-Level Differentiation (SLD).`
  },
  {
    id: 12,
    title: "Impact of Motivation and Workload on Service Time Components",
    category: Category.Workforce,
    rawText: `Ahmad M. Ashkanani, Benjamin B. Dunford, Kevin J. Mumford. Management Science 2022. Empirical Analysis. Intrinsic vs Extrinsic Motivation. Speedup vs Slowdown. Offline vs Online service time.`
  },
  {
    id: 13,
    title: "Engineering Solution of a Basic Call-Center Model",
    category: Category.Staffing,
    rawText: `Ward Whitt. Management Science 2005. M/GI/s/r + GI model. Two-step approximation: Markovian M/M/s/r + M(n) (state dependent abandonment) and then exponential service time approx.`
  },
  {
    id: 14,
    title: "Expanding Service Capabilities Through an On-Demand Workforce",
    category: Category.Workforce,
    rawText: `Xu Sun, Weiliang Liu. Operations Research 2023. Gig-economy, on-call pool. Two-stage decision model. Optimal mix of permanent and on-call staff. Double-switching pattern in scheduling.`
  },
  {
    id: 15,
    title: "A Logarithmic Safety Staffing Rule for Contact Centers with Call Blending",
    category: Category.Staffing,
    rawText: `Guodong Pang, Ohad Perry. Management Science 2015. Call Blending (Inbound + Outbound). Infinite supply of outbound work. Logarithmic safety staffing rule. Threshold control policy.`
  },
  {
    id: 16,
    title: "Dynamic Call Center Routing Policies Using Call Waiting and Agent Idle Times",
    category: Category.Routing,
    rawText: `Wyean Chan, Ger Koole, Pierre L'Ecuyer. M&SOM 2014. Weight-based routing (WR) policies. Affine combination of waiting time and idle time. Simulation-based optimization (Genetic Algorithm).`
  },
  {
    id: 17,
    title: "Parametric Forecasting and Stochastic Programming Models for Call-Center Workforce Scheduling",
    category: Category.Forecasting,
    rawText: `Noah Gans, Haipeng Shen, et al. M&SOM 2015. Integrated forecasting and stochastic programming. Gaussian quadrature for scenarios. Recourse actions (updates).`
  },
  {
    id: 18,
    title: "Rate-Based Daily Arrival Process Models with Application to Call Centers",
    category: Category.Forecasting,
    rawText: `Boris N. Oreshkin, et al. Operations Research 2016. Rate-based arrivals vs Count-based. NORTA (Normal To Anything) copula. Modeling dependence between periods.`
  },
  {
    id: 19,
    title: "Intelligent Procedures for Intra-Day Updating of Call Center Agent Schedules",
    category: Category.Workforce,
    rawText: `Vijay Mehrotra, et al. Production and Operations Management 2010. Intra-day schedule updating. Rolling re-optimization. Integer programming. Overtime/VTO.`
  },
  {
    id: 20,
    title: "A semiparametric Bayesian model for queueing arrival processes",
    category: Category.Forecasting,
    rawText: `Kaan Kuzu, Refik Soyer, Murat T. Tarimcilar. POM 2023. Semiparametric Bayesian model. Gamma process prior. Monotonic and non-monotonic arrival intensity. Interval censored data.`
  },
  {
    id: 21,
    title: "A Note on Profit Maximization and Monotonicity for Inbound Call Centers",
    category: Category.Staffing,
    rawText: `Ger Koole, Auke Pot. Operations Research 2011. Profit Maximization. M/M/s/n + M model. Monotonicity properties. Convexity issues.`
  }
];