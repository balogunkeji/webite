/*
 * component: FlexibleDiv
 * author: Tomisin
 * Date: November 3rd 2021
 * Recce-Solutions FlexibleDiv and Gridable component
 *  use props to customize where rendered
 */

import styled from 'styled-components';

// Flexible box  div element
interface StyleProps {
  
  display?: string
  justifyContent?: string
  alignItems?: string
  width?: string | number
  height?: string | number
  flexWrap?: string 
  flexDir?: string
}

export const FlexibleDiv = styled('div')<StyleProps>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  flex-wrap: ${({ flexWrap }) => flexWrap || 'wrap'};
  flex-direction: ${({ flexDir }) => flexDir || 'row'};
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'max-content'};
  
`;

// Flexible box section element
export const Section = styled('section')<StyleProps>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  flex-wrap: ${({ flexWrap }) => flexWrap || 'wrap'};
  flex-direction: ${({ flexDir }) => flexDir || 'row'};
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'max-content'};

`;

// Flexible box section element
export const UL = styled('ul')<StyleProps>`
  display: flex;
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  flex-wrap: ${({ flexWrap }) => flexWrap || 'wrap'};
  flex-direction: ${({ flexDir }) => flexDir || 'row'};
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'max-content'};
  
`;

// Gridable box

// export const GridableDiv = styled("div")`
//   display: grid;
//   grid-template-columns: ${({ gridCol }) => gridCol || "1fr"};
//   grid-template-rows: ${({ gridRow }) => gridRow || "auto"};
//   grid-gap: ${({ gap }) => gap || "10px"};
// `;

// export const GridSection = styled("section")`
//   padding: 50px 0;
//   display: grid;
//   grid-template-columns: ${({ gridCol }) => gridCol || "1fr  1fr 1fr 1fr"};
//   grid-template-rows: ${({ gridRow }) => gridRow || "auto"};
//   grid-gap: ${({ gap }) => gap || "10px"};
// `;
