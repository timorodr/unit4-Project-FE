import { Link } from "react-router-dom"
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

export default function PieChartStuff({ chart }){


    const data = [
        { value: 5, label: 'Income' },
        { value: 10, label: 'Income' },
        { value: 3000, label: 'Expense' },
        { value: 20, label: 'Expense' },
      ];

      const size = {
        width: 400,
        height: 200,
      };

    const id = budget.url.split('/')[4]
    console.log(id)

    return (
        <div>
            <PieChart
                series={[
                    {
                    arcLabel: (item) => `${item.label} (${item.value})`,
                    arcLabelMinAngle: 45,
                    data,
                    },
                ]}
                sx={{
                    [`& .${pieArcLabelClasses.root}`]: {
                    fill: 'white',
                    fontWeight: 'bold',
                    },
                }}
                {...size}
            />
        </div>
        )
}