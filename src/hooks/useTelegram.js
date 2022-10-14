const tg = window.Telegram.WebApp;

export function useTelegram() {

    const webAppClose = () => {
        tg.close();
    };

    const onToggleButton = () => {
        if(tg.MainButton.isVisible) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    };

    return {
        tg,
        user: tg.initDataUnsafe?.user,
        webAppClose,
        onToggleButton,
    };
}
