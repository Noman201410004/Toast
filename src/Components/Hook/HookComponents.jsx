
import toast from 'react-hot-toast';

const HookComponents = () => {
    const notify = () => toast.success('Successfully toasted!');
    
    const notifytwo=()=>toast.error("This didn't work.")
    const notifythree=()=>toast.success('Look at my styles.', {
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200',
        },
        iconTheme: {
          primary: '#713200',
          secondary: '#FFFAEE',
        },
      });
      const notifyFour=()=>toast.custom((t) => (
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                  alt=""
                />
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">
                  Emilia Gates
                </p>
                <p className="mt-1 text-sm text-gray-500">
                  Sure! 8:30pm works great!
                </p>
              </div>
            </div>
          </div>
         
        </div>
      ))
    return {notify,notifytwo,notifythree,notifyFour}
        
};

export default HookComponents;