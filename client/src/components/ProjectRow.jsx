const ProjectRow = ({ project }) => {
  const { name, description, status } = project;
  return (
    <tr>
      <td>{name}</td>
      <td>{description}</td>
      <td>{status}</td>
    </tr>
  );
};

export default ProjectRow;
