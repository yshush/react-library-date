import React, { useRef, useState } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

dayjs.locale("ko");
dayjs.extend(utc);
dayjs.extend(timezone);

export default function DayjsExample() {
  const birthdayRef = useRef(null);
  const [day, setDay] = useState("");
  const handleBirthdayChange = (event) => {
    setDay(dayjs(event.target.value, "YYYY-MM-DD").format("dddd"));
  };

  const dayjsDate = dayjs();
  const newDayjsDate = dayjsDate.add(1, "week");
  const cloneNewDayjsDate = newDayjsDate.add(1, "week");
  return (
    <div>
      <h1>Day.js</h1>
      <div>Immutable Check</div>
      <div>
        {dayjsDate.format()}
        <br />
        {newDayjsDate.format()}
        <br />
        {cloneNewDayjsDate.format()}
        <br />
      </div>
      <div>
        <h2>Summer Time (New-york)</h2>
        <div>{dayjs.tz.guess()}</div>
        <div>
          2017년 1월 1일에 1년 빼기:
          {dayjs
            .tz("2018-03-10 13:00:00", "America/New_York")
            .add(1, "day")
            .format()}
        </div>
        <div>
          2018년 3월 13일 13시에 하루 더하기:
          {dayjs
            .tz("2018-03-13 13:00:00", "America/New_York")
            .add(1, "day")
            .format()}
        </div>
        <div>
          2018년 3월 13일 13시에 24시간 더하기:
          {dayjs
            .tz("2018-03-13 13:00:00", "America/New_York")
            .add(24, "hour")
            .format()}
        </div>
      </div>

      <div>
        <h2>Leap year (korea)</h2>
        <div>
          2017년 1월 1일에 1년 빼기:
          {dayjs("2017-01-01").subtract(1, "year").format()}
        </div>
        <div>
          2017년 1월 1일에 365일 빼기:
          {dayjs("2017-01-01").subtract(365, "day").format()}
        </div>
      </div>

      <div>
        <h2>한국어로 표기</h2>
        <div>
          07-17-2021을 2021년 7월 17일로 표기:
          {dayjs("07-17-2021").format("YYYY년 M월 D일")}
        </div>
      </div>

      <div>
        <h2>자기 생일 요일 찾기</h2>
        <div>
          <input
            type="date"
            ref={birthdayRef}
            onChange={handleBirthdayChange}
          />
          <div>무슨 요일이었을까?</div>
          <div>{day}</div>
        </div>
      </div>

      <div>
        <h2>두 날짜 비교</h2>
        <div>
          <div>2021-07-17 03:00와 2021-07-18 02:00은 몇시간 차이인가?</div>
          <div>
            {dayjs("2021-07-17 03:00").diff(dayjs("2021-07-18 02:00"), "hours")}
            시간
          </div>
        </div>
      </div>
    </div>
  );
}
