//Assets
import HomeBackground from "../../assets/images/man-standing-on-balcony-1725385.png"
import { flexbox } from "@material-ui/system"


const styles = {
    mainContainer: {
        padding: 0,
        margin: 0,
        height: '100vh',
        position: 'relative'
    },
    logoContainer: {
        marginBottom: 30
    },
    imageSection: {
        backgroundImage: `url(${HomeBackground})`,
        backgroundPosition: 'center bottom',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        padding: 0,
        margin: 0,
        position: 'relative'
    },
    opacity: {
        width: '100%',
        height: '100%',
        background: 'black',
        opacity: '0.3',
        position: 'relative'
    },
    formSection: {
        position: 'relative',
        margin: 0,
        padding: 0,
        background: '#F5F6F9'
    },
    formWrapper: {
        padding: '15%',
        paddingTop: '5%',
        paddingBottom: '5%'
    },
    logo: {
        width: 151,
        height: 51
    },
    pageHeading: {
        textTransform: 'uppercase'
    },
    alt: {
        color: '#333232'
    },
    link: {
        color: '#1461A2'
    },
    input: {
        background: '#FFFFFF',
        width: '95%',
        height: 40,
        borderRadius: 10,
        border: 'none',
        padding: 7,
        fontWeight: '600',
        marginBottom: 25
    },
    label: {
        color: '#043B5C7F'
    },
    button: {
        width: 198,
        height: 52,
        borderRadius: 5,
        color: '#FFFFFF',
        background: '#4786FF',
        border: 'none',
        letterSpacing: '0.07px',
        fontWeight: 600,
        marginTop: 15,
        marginBottom: 20,
        cursor: 'pointer'
    },
    terms: {
        color: '#333232'
    },
    liveizyTerms: {
        color: '#1461A2',
        textDecoration: 'underline'
    },
    quoteBox: {
        position: 'absolute',
        zIndex: 10,
        right: -80,
        bottom: 110,
        background: '#FFFFFF',
        color: 'black',
        width: 350,
        height: 200,
        borderRadius: '0px 0px 60px 0px'
    },
    triangle: {
        position: 'relative',
        height: 0,
        width: 0,
        borderLeft: '150px solid #EAF0FFFA',
        borderRight: '100px solid transparent',
        borderBottom: '40px solid transparent',
        borderTop: '0px solid transparent'
    },
    quoteSign: {
        position: 'absolute',
        top: -20,
        left: -20,
        background: '#1461A2',
        borderRadius: '15px 15px 0px 0px',
        width: 50,
        height: 46,
        zIndex: 20, 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#FFFFFF',
        fontSize: 20
    },
    quoteBottomFlex: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    smallLogo: {
        width: 43,
        height: 38
    },
    quoteTextFlex: {
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 0,
    },
    quote: {
        fontStyle: 'italic',
        color: '#043B5C',
        marginBottom: 40
    },
    author: {
        marginTop: 0,
        marginBottom: 0,
        fontWeight: 700
    },
    position: {
        marginTop: 0,
        textTransform: 'uppercase' 
    },
    pageHeading: {
        fontSize: 32,
        color: '#043B5C'
    },
    quoteIcon: {
        width: 20,
        height: 30
    },
    forgetPassword: {
        display: 'inline',
        float: 'right',
        color: '#1461A2'
    }
}

export default styles;