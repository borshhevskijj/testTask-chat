import React, { FC } from "react";
import dayjs from "dayjs";
import { transformTime } from "../../utils/transformTime";

interface props {
  timestamp: number;
  time?: number;
}
export const Time: FC<props> = ({ timestamp }) => {
  const dayjsDate = dayjs.unix(timestamp);

  return (
    <time dateTime={timestamp.toString()}>
      {transformTime(dayjsDate.hour())}:{transformTime(dayjsDate.minute())}
    </time>
  );
};
