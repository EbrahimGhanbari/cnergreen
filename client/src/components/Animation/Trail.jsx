import React from "react";
import { useTrail, a } from "react-spring";

export default function ({ open, children, direction, xValue, ...props }) {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 100, tension: 2000, friction: 1000 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: open ? 220 : 0,
    from: { opacity: 0, x: xValue, height: 0 },
  });

  return (
    <div {...props}>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <a.div
            key={items[index]}
            style={{
              ...rest,
              transform: x.interpolate((x) => {
                if (direction === "horizontal") {
                  return `translate3d(${x}px,0,0)`;
                } else if (direction === "vertical") {
                  return `translate3d(0,${x}px,0)`;
                }
              }),
            }}
          >
            <a.div style={{ height }}>{items[index]}</a.div>
          </a.div>
        ))}
      </div>
    </div>
  );
}
