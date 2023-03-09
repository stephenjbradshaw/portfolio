import {useTranslation} from "react-i18next";
import styled from "styled-components";
import {BaseButton, BaseUl} from "./BaseElements";

interface UlProps {
  fontSize: string;
}

const Ul = styled(BaseUl)<UlProps>`
  display: flex;
  justify-content: center;
  gap: 1vw;
  font-size: ${({fontSize}) => fontSize};
`;

interface LangButtonProps {
  isSelected: boolean;
}

const LangButton = styled(BaseButton)<LangButtonProps>`
  font-weight: ${({isSelected}) => (isSelected ? "bold" : "normal")};
`;

interface Props {
  fontSize: string;
}

const LangSelect = ({fontSize}: Props) => {
  const {t, i18n} = useTranslation();

  return (
    <Ul
      className="lang-select"
      aria-label={t<string>("LANGUAGE")}
      fontSize={fontSize}
    >
      <li>
        <LangButton
          onClick={() => i18n.changeLanguage("en-GB")}
          isSelected={i18n.resolvedLanguage === "en-GB"}
        >
          EN
        </LangButton>
      </li>
      <div aria-hidden={true}>|</div>
      <li>
        <LangButton
          onClick={() => i18n.changeLanguage("de-DE")}
          isSelected={i18n.resolvedLanguage === "de-DE"}
        >
          DE
        </LangButton>
      </li>
    </Ul>
  );
};

export default LangSelect;
