import { DynamicComponentType } from '@/enum';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';

/***************************  DYNAMIC - IMPORT  ***************************/

function loadComponent(component, type) {
  switch (type) {
    case DynamicComponentType.IMAGE:
      return import(`@/images/${component}`);
    default:
      return import(`@/components/logo`);
  }
}

/***************************  DYNAMIC COMPONENT  ***************************/

/**
 *
 * @param component: string = Used for rendering manually modified SVG components, such as images, icons
 * @param type: DynamicComponentType = Used to choose the path of the rendering component.
 * @param props: any = Used to set dynamic props, such as sx, size, and color.
 * @returns = Import the component dynamically and pass the rendering component.
 */

// eslint-disable-next-line
function DynamicComponent({ component, type, props }) {
  const ImportedComponent = dynamic(() => loadComponent(component, type), { ssr: false });

  return <ImportedComponent {...props} />;
}

export default DynamicComponent;

DynamicComponent.propTypes = { component: PropTypes.string, type: PropTypes.any, props: PropTypes.any };
