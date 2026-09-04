import React from "react";
import {useLocation} from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import DropdownNavbarItem from "@theme/NavbarItem/DropdownNavbarItem";
import {
  docsPlatforms,
  parseDocsPath,
  pathWithLocale,
  targetPathForPlatform
} from "@site/src/components/DocsNavigation";

export default function PlatformDropdownNavbarItem(props) {
  const location = useLocation();
  const {siteConfig} = useDocusaurusContext();
  const knownRoutes = siteConfig.customFields.docsRoutes || [];
  const currentPlatform = parseDocsPath(location.pathname).platform;
  const activePlatform =
    docsPlatforms.find((item) => item.key === currentPlatform) || docsPlatforms[0];

  const items = docsPlatforms.map((item) => ({
    label: item.label,
    to: targetPathForPlatform(location.pathname, item, knownRoutes),
    activeBasePath: pathWithLocale(location.pathname, `/${item.key}/`)
  }));

  return (
    <DropdownNavbarItem
      {...props}
      label={activePlatform.label}
      items={items}
    />
  );
}
