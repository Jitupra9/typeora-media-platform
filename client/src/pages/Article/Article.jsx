import React, { memo, useContext, useMemo, useEffect } from "react";
import Articles from "./Articles";
function Article() {
  return (
    <div className=" flex gap-1 w-full">
      <Articles />
    </div>
  );
}

export default memo(Article);
