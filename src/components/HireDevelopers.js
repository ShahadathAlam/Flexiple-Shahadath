import CardPortfolio from "./CardPortfolio";
import CardSticky from "./CardSticky";
import { MdHome } from "react-icons/md"; // Material Design
function HireDevelopers() {
  return (
    <section className="py-8 px-4 bg-gray-50">
      <article className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 flex items-center gap-1.5">
          <span>
            <MdHome size={40} color="blue" />
          </span>
          Hire .NET Developers
        </h2>

        <div className="space-y-4 mb-6">
          <label className="block font-medium" htmlFor="skills">
            Filter by Skills
          </label>
          <select
            id="skills"
            name="skills"
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="dotnet">.Net Framework</option>
            <option value="csharp">C#</option>
            <option value="aspnet">ASP.NET</option>
            <option value="mvc">MVC</option>
          </select>

          <label className="block font-medium mt-4" htmlFor="notice-period">
            Filter by Notice Period
          </label>
          <select
            id="notice-period"
            name="notice-period"
            className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="immediately">Immediately Available</option>
            <option value="15-days">1-15 days</option>
            <option value="30-days">16-30 days</option>
            <option value="60-days">31-60 days</option>
            <option value="90-days">61-90 days</option>
          </select>
        </div>

        <p className="text-lg font-medium text-gray-600">
          5,188 .NET engineers to hire...
        </p>
      </article>

      {/* Cards Section */}

      <div className="relative flex flex-wrap gap-6 mt-8">
        {/* Cards Section */}
        <div className="flex-1 space-y-6 w-full md:w-3/4">
          <CardPortfolio
            experience={1}
            notice={16}
            ctc={16}
            workedAt={["Pitney Bowes"]}
            description="As a Software Engineer at Pitney Bowes, Goarang made significant contributions in developing RESTful APIs using .NET Core"
            companies={["Pitney Bowes", "Pitney Bowes"]}
          />
          <CardPortfolio
            experience={2}
            notice={30}
            ctc={20}
            workedAt={["TCS"]}
            description="Worked as a Senior .NET Developer at TCS, developing enterprise-level applications."
            companies={["TCS", "Microsoft"]}
          />

          <CardPortfolio
            experience={5}
            notice={20}
            ctc={40}
            workedAt={["XYZ"]}
            description="Worked as a Senior .NET Developer at TCS, developing enterprise-level applications."
            companies={["TCS", "Microsoft"]}
          />

          <CardPortfolio
            experience={2}
            notice={30}
            ctc={20}
            workedAt={["TCS"]}
            description="Worked as a Senior .NET Developer at TCS, developing enterprise-level applications."
            companies={["TCS", "Microsoft"]}
          />

          <CardPortfolio
            experience={2}
            notice={30}
            ctc={20}
            workedAt={["TCS"]}
            description="Worked as a Senior .NET Developer at TCS, developing enterprise-level applications."
            companies={["TCS", "Microsoft"]}
          />

          <CardPortfolio
            experience={2}
            notice={30}
            ctc={20}
            workedAt={["TCS"]}
            description="Worked as a Senior .NET Developer at TCS, developing enterprise-level applications."
            companies={["TCS", "Microsoft"]}
          />

          <CardPortfolio
            experience={2}
            notice={30}
            ctc={20}
            workedAt={["TCS"]}
            description="Worked as a Senior .NET Developer at TCS, developing enterprise-level applications."
            companies={["TCS", "Microsoft"]}
          />
        </div>

        {/* Sticky Card */}
        <div className="md:sticky md:top-20 w-full md:w-1/4">
          <CardSticky />
        </div>
      </div>
    </section>
  );
}

export default HireDevelopers;
