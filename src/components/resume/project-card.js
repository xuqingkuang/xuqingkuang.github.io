import React, { PropTypes } from 'react';
import { Card } from 'antd';

const ProjectCard = ({title, project, example, children}) => {

  const extra = (
    <div className="screen-only">
      <a href={project}>项目链接</a>
      &nbsp;|&nbsp;
      <a href={example}>演示页面</a>
    </div>
  );

  return (
    <Card title={title} extra={extra}>
      <div className="print-only">
        <table className="print-product-table">
          <tbody>
            <tr>
              <td>项目链接：</td>
              <td><a href={project}>{project}</a></td>
            </tr>
            <tr>
              <td>演示页面：</td>
              <td><a href={example}>{example}</a></td>
            </tr>
          </tbody>
        </table>
      </div>
      {children}
    </Card>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  project: PropTypes.string.isRequired,
  example: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
    PropTypes.object
  ])
}

export default ProjectCard;
