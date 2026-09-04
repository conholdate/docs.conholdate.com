import React from "react";
import {useLocation} from "@docusaurus/router";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import DropdownNavbarItem from "@theme/NavbarItem/DropdownNavbarItem";
import {
  availableVersionsForPlatform,
  docsPlatforms,
  parseDocsPath,
  targetPathForVersion,
  versionByKey
} from "@site/src/components/DocsNavigation";

export default function VersionDropdownNavbarItem(props) {
  const location = useLocation();
  const {siteConfig} = useDocusaurusContext();
  const knownRoutes = siteConfig.customFields.docsRoutes || [];
  const parsed = parseDocsPath(location.pathname);
  const platform = parsed.platform || docsPlatforms[0].key;
  const availableVersions = availableVersionsForPlatform(platform);
  const activeVersion = availableVersions.some((item) => item.key === parsed.version)
    ? versionByKey(parsed.version)
    : availableVersions[0];

  const items = availableVersions.map((item) => ({
    label: item.label,
    to: targetPathForVersion(location.pathname, item, knownRoutes)
  }));

  return (
    <DropdownNavbarItem
      {...props}
      label={activeVersion.label}
      items={items}
    />
  );
}
