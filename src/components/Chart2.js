import React from "react";
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util
} from "bizcharts";

class Chart2 extends React.Component {
  render() {
    const valueData = this.props.values;
    var data = [
      {
        name: valueData[0].value_name,
        vote: this.props.completedValue1
      },
      {
        name: valueData[1].value_name,
        vote: this.props.completedValue2
      },
      {
        name: valueData[2].value_name,
        vote: this.props.completedValue3
      }
    ];
    var imageMap = {
      // [valueData[0].value_name]:
      //   "https://cdn.shopify.com/s/files/1/1061/1924/products/Smiling_Face_Emoji_large.png?v=1571606036",
      // [valueData[1].value_name]:
      //   "https://images.emojiterra.com/twitter/v12/512px/1f609.png",
      // [valueData[2].value_name]:
      //   "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Emojione_1F602.svg/1200px-Emojione_1F602.svg.png",
      // Mark: "https://zos.alipayobjects.com/rmsportal/KzCdIdkwsXdtWkg.png"
    };
    const scale = {
      vote: {
        min: 0
      }
    };
    return (
      <div>
        <h3>Project Value Tracker</h3>
        <Chart
          height={window.innerHeight}
          data={data}
          padding={[60, 20, 40, 60]}
          scale={scale}
          forceFit
        >
          <Axis
            name="vote"
            labels={null}
            title={null}
            line={null}
            tickLine={null}
          />
          <Geom
            type="interval"
            position="name*vote"
            color={["name", ["#7f8da9", "#fec514", "#db4c3c", "#daf0fd"]]}
          />
          <Tooltip />
          <Geom
            type="point"
            position="name*vote"
            size={60}
            shape={[
              "name",
              function(name) {
                return ["image", imageMap[name]];
              }
            ]}
          />
        </Chart>
      </div>
    );
  }
}

export default Chart2;
