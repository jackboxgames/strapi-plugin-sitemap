import React from 'react';
import { IconLinks } from '@buffetjs/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faTrash,
  faPencilAlt,
} from '@fortawesome/free-solid-svg-icons';

const CustomRow = ({ changefreq, priority, name, onDelete, prependSlash, openModal }) => {
  const styles = {
    name: {
      textTransform: !prependSlash ? 'capitalize' : 'none',
    },
  };

  const handleEditClick = (e) => {
    openModal(name);
    e.stopPropagation();
  };

  const handleDeleteClick = (e) => {
    onDelete(name);
    e.stopPropagation();
  };

  return (
    <tr>
      <td>
        <p style={styles.name}>{prependSlash && '/'}{name}</p>
      </td>
      <td>
        <p>{changefreq}</p>
      </td>
      <td>
        <p>{priority}</p>
      </td>
      <td>
        <IconLinks links={[
          {
            icon: <FontAwesomeIcon icon={faPencilAlt} />,
            onClick: handleEditClick,
          },
          {
            icon: <FontAwesomeIcon icon={faTrash} />,
            onClick: handleDeleteClick,
          },
        ]} />
      </td>
    </tr>
  );
};

export default CustomRow;
