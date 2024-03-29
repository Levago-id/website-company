import Button from "components/atoms/Button";
import Select from "components/atoms/Form/Select";
import LineDivider from "components/atoms/LineDivider";
import PageSentence from "components/molecules/PageSentence";
import ProjectCard from "components/molecules/Card/ProjectCard";
import PageTemplate from "components/templates/PageTemplate";
import React from "react";
import randomString from "utils/randomString";

const Project = () => {
  interface Project {
    title: string;
    description: string;
    href: string; // Menambahkan properti href
  }

  const projectList: Project[] = [
    {
      title: "MITGLOS Website Company",
      description: "Website",
      href: "https://mitglos.com/", // Menambahkan href ke dalam objek project
    },
    {
      title: "Website Rental Mobil",
      description: "Website Custom",
      href: "https://rentalsumbersmg.netlify.app/", // Menambahkan href ke dalam objek project
    },
    {
      title: "Levapos (Levago Point Of Sale)",
      description: "Point of Sale Cashier Website",
      href: "https://levapos.000webhostapp.com/", // Contoh tambahan dengan href yang berbeda
    },
    {
      title: "Absenin (Sistem Informasi & Mobile App)",
      description: "Coming Soon Our SAAS",
      href: "https://example.com", // Contoh tambahan dengan href yang berbeda
    }
  ];

  return (
    <PageTemplate title="Project - Levago">
      <section className="flex flex-col items-center gap-5 md:flex-row md:justify-between">
        <aside className="w-full sm:w-10/12 grid grid-cols-1 place-items-center gap-12 md:place-items-start md:w-8/12 lg:w-6/12" data-aos="fade-right">
          <div className="text-center md:text-left">
            <PageSentence badge="PROJECTS" title="Kami telah menyelesaikan beberapa proyek" />
          </div>
        </aside>
        <aside className="w-full min-w-[175px] md:w-fit" data-aos="fade-left">
          <Select
            options={[
              { label: "Website", value: "web" },
              { label: "Web App", value: "webapp" },
              { label: "Mobile App", value: "mobile" },
            ]}
          />
        </aside>
      </section>
      <LineDivider />
      <section className="grid place-items-center gap-16">
        <div className="w-full grid grid-cols-1 gap-y-16 sm:grid-cols-2 sm:gap-x-5">
          {projectList.map((project) => {
            return (
              <div className="basis-full lg:basis-1/2" key={randomString(64)} data-aos="zoom-in-up">
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  href={project.href} // Mem-pass href ke dalam ProjectCard
                />
              </div>
            );
          })}
        </div>
        <Button value="Load More" color="white" style="light" />
      </section>
    </PageTemplate>
  );
};

export default Project;
