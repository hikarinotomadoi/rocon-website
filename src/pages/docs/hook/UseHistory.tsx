import React from "react";
import { Link } from "rocon/react";
import { DocsNavigator } from "~/components/DocsNavigator";
import { docsComponentRoutes, docsHookRoutes } from "~/routes";
import { CodeBlock } from "~/util/CodeBlock";
import { ExternalLink } from "~/util/ExternalLink";
import { DocsArticle } from "../DocsArticle";

export const DocsHookUseHistory: React.FC = () => {
  return (
    <DocsArticle>
      <h2>useHistory</h2>

      <CodeBlock>
        {`
useHistory(): History;
        `}
      </CodeBlock>
      <p>
        The <b>useHistory</b> hook returns the{" "}
        <ExternalLink href="https://github.com/ReactTraining/history/blob/master/docs/api-reference.md">
          history
        </ExternalLink>{" "}
        object passed to or generated by{" "}
        <Link route={docsComponentRoutes._.roconRoot}>RoconRoot</Link>. It
        causes a rerendering only when the returned history object changes.
      </p>
      <p>
        <strong>Note:</strong> do not use <code>useHistory</code> for the
        purpose of navigation (<code>history.push</code>)! Use{" "}
        <Link route={docsHookRoutes._.useNavigate}>useNavigate</Link> instead.
      </p>
      <DocsNavigator />
    </DocsArticle>
  );
};
