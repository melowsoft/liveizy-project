const styles = {
    header: {
        marginTop: 30,
        marginBottom: 40,
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid black',
        paddingBottom: 10
    },
    leftItem:{
        display: 'flex',
        alignItems: 'center'
    }, 
    rightItem:{
        display: 'flex'
    },
    userFlex: {
        display: 'flex'
    },
    hrWrapper: {
        marginRight: 15
    },
    hrFirst: {
        width: 40,
        border: '1px solid #062239'
    }, 
    hrSecond: {
        width: 35,
        border: '1px solid #062239'
    }, 
    hrThird: {
        width: 30,
        border: '1px solid #062239'
    },
    topTitle: {
        textTransform: 'uppercase',
        fontSize: 18
    },
    notificationIcon: {
        margin: '0 20px' 
    },
    userFlex: {
    background : '#E1F8FE',
    width: 145,
    height: 43,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
    },
    user: {
        borderRadius: '50%',
        width: 30,
        height: 30
    },
    userIconCon: {
        marginRight: 10,
        position: 'relative'
    },
    activeIndicator :{
        width: 15,
        height: 15,
        borderRadius: '50%',
        background: '#27B722',
        position: 'absolute',
        right: -5,
        bottom: 4
    }

}

export default styles;