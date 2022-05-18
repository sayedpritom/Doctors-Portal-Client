import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import { format } from 'date-fns/esm';

const AppointmentBanner = ({date, setDate}) => {
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img className="max-w-sm rounded-lg shadow-2xl" src={chair} />
                    <div>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                        />;
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;