import { BiBarChart } from 'react-icons/bi';
import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {
    const studentsData = [
        { id: 1, name: "Alice", math: 78, physics: 85, chemistry: 92 },
        { id: 2, name: "Bob", math: 82, physics: 79, chemistry: 88 },
        { id: 3, name: "Charlie", math: 90, physics: 91, chemistry: 94 },
        { id: 4, name: "Diana", math: 67, physics: 74, chemistry: 70 },
        { id: 5, name: "Evan", math: 85, physics: 89, chemistry: 92 },
        { id: 6, name: "Fiona", math: 73, physics: 68, chemistry: 76 },
        { id: 7, name: "George", math: 89, physics: 93, chemistry: 95 },
        { id: 8, name: "Hannah", math: 92, physics: 87, chemistry: 90 },
        { id: 9, name: "Ivy", math: 76, physics: 80, chemistry: 83 },
        { id: 10, name: "Jack", math: 84, physics: 85, chemistry: 87 }
      ];
      
    return (
        <div>
         <h2>safcdfv</h2>
         < LChart width={500} height={500} data={studentsData}> 
         <XAxis dataKey="name"></XAxis>
         <YAxis></YAxis>
         <Line dataKey="math" stroke='red'> </Line>
         <Line dataKey="physics" stroke='green'> </Line>
      </LChart>
  
        
        </div>
    );
};

export default LineChart;