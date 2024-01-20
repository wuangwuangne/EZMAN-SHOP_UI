// import styles from './DefaultLayout.module.scss'
// import classNames from "classnames";
import Header from './Header';
// const cx= classNames.bind(styles)
import Footer from './Footer/Footer';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div style={{ marginTop: 90, marginBottom: 40 }}>{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
