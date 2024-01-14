//index.js
function Home() {
const data = [
{
id: 1,
title: 'Hoc',
description: 'JAVA',
},
{
id: 2,
title: 'Hoc',
description: 'html',
},
{
id: 3,
title: 'Hoc',
description: 'py',
},
{
id: 4,
title: 'Hoc',
description: 'react',
},
];

    return (
        <div>
            <Image data={data} />
        </div>
    );

}

//imgae.jsx\
function Image({ data }) {
console.log(data);

    return (
        <div>
            {data.map((item) => (
                <div style={{ display: 'flex' }}>
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                </div>
            ))}
        </div>
    );

}

export default Image;
