import { FaXTwitter, FaFacebook, FaLinkedin } from 'react-icons/fa6';
import { StyledSocialIcons } from './styles/SocialIcons.styled';

export function SocialIcons() {
  return(
    <StyledSocialIcons>
      <li>
        <a href="https://x.com">
        <FaXTwitter />
        </a>
        </li>
        <li>
        <a href="https://facebook.com">
        <FaFacebook />
        </a>
        </li>
        <li>
        <a href="https://linkedin.com">
        <FaLinkedin />
        </a>
      </li>
    </StyledSocialIcons>
  )
}