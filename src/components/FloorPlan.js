import React from 'react';

const data = {
    image: "https://newprojects.99acres.com/projects/sai_builders_bhopal/sai_vajra_towers/maps/dyd29bgf_med.jpg",
    inclusions: "3 bedrooms, 1 kitchen, 13 bathrooms, 1 living",
    area: "1661 sq.ft. (154.31 sq.m.)",
    price: "89.65 Lacs"
};

function FloorPlan() {
    // Responsive styles based on screen size
    const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 768);

    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const styles = {
        main: {
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row', // Stack vertically on mobile
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#e0e0e0',
            width: isMobile ? '90%' : '60%', // Adjust width based on screen size
            margin: 'auto',
            borderRadius: 10,
            marginTop: '2%',
            padding: 10,
            boxSizing: 'border-box'
        },
        image: {
            width: isMobile ? '100%' : '50%', // Make image full width on mobile
            height: 'auto', // Maintain aspect ratio
            margin: 10
        },
        textContainer: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            textAlign: isMobile ? 'center' : 'left'
        },
        text: {
            margin: '5px 0',
            fontWeight: '600',
        }
    };

    return (
        <div>
            <div style={styles.main}>
                <div>
                    <img src={data.image} alt="Floor Plan" style={styles.image} />
                </div>
                <div style={styles.textContainer}>
                    <p style={styles.text}>Inclusions: {data.inclusions}</p>
                    <p style={styles.text}>Area: {data.area}</p>
                    <p style={styles.text}>Price: {data.price}</p>
                </div>
            </div>
        </div>
    );
}

export default FloorPlan;
