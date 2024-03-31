import { useEffect, useState } from 'react';
import { changeLanguage } from '../redux/action';
import { connect } from 'react-redux';
import NavigationFunction from './navigation/NavigationFunction';

const IpGeolocation = (props) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://ipapi.co/json/');
      const jsonData = await response.json();
      return jsonData;
    };

    fetchData().then(data=>{
      setData(data);
    }).catch(err=>{
      console.log("Error:",err);
    })
  }, []);

  // if (data) {
  //   if(data.country_code){
  //     data.country_code==='JP'?props.changeLanguage('japan'):props.changeLanguage('english');
  //   }
  // }
  return <NavigationFunction changeLanguage={props.changeLanguage} language={props.language}/>;
};

const mapStateToProps = state =>{
  return {
    language:state.language
  }
}

export default connect(mapStateToProps)(IpGeolocation);