import { gql, useQuery } from "@apollo/client";
import ProjectRow from "./ProjectRow";

const GET_PROJECTS = gql`
  {
    projects {
      id
      name
      description
      status
    }
  }
`;

const Projects = () => {
  const { loading, error, data } = useQuery(GET_PROJECTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something Went Wrong</p>;

  return (
    <>
      {!loading && !error && (
        <table className="table table-hover mt-3">
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Status</th>
            <th></th>
          </tr>
          {data.projects.map((project) => (
            <ProjectRow key={project.id} project={project} />
          ))}
        </table>
      )}
    </>
  );
};

export default Projects;
