import styled from 'styled-components';

export default styled.a`
  ${({
    c = 'black',
    hc = 'yellow',
    theme,
  }) => `
    color: ${theme.colors[c]};
    text-decoration: underline;
    &:hover {
      color: ${theme.colors[hc]};
    }
  `}
`;
