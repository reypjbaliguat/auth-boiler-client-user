import bg from '@/assets/login-bg.jpg';

function LoginRightColumn() {
    return (
        <div className={`grid col-span-2 h-full`}>
            <div className="w-full relative">
                <img
                    src={bg}
                    alt="forest"
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>
        </div>
    );
}

export default LoginRightColumn;
