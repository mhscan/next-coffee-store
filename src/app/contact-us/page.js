import Breadcrumb from "@/components/modules/breadcrumb/Breadcrumb";
import Footer from "@/components/modules/footer/Footer";
import Navbar from "@/components/modules/navbar/Navbar";
import Form from "@/components/templates/contact-us/Form";

import styles from "@/styles/contact-us.module.css";
import { authUser } from "@/utils/serverHelpers";



const page = async () => {
  const user = await authUser();

  return (
    <>
      <Navbar isLogin={user ? true : false} />
      <Breadcrumb route={"تماس با ما"} />

      <div className={styles.container}>
        
      
          <Form />
          
      </div>

      <Footer />
    </>
  );
};

export default page;
