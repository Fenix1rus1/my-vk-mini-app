const MODAL_PAGE_FILTERS = 'filters';
const MODAL_PAGE_COUNTRIES = 'countries';
const MODAL_PAGE_STORY_FEEDBACK = 'story-feedback';
const MODAL_PAGE_USER_INFO = 'user-info';
const MODAL_PAGE_FULLSCREEN = 'fullscreen';
const MODAL_PAGE_WITH_FIXED_HEIGHT = 'fixed-height';
const MODAL_PAGE_DYNAMIC = 'dynamic';

const MODAL_CARD_MONEY_SEND = 'money-send';
const MODAL_CARD_APP_TO_MENU = 'app-to-menu';
const MODAL_CARD_ABOUT = 'say-about';
const MODAL_CARD_NOTIFICATIONS = 'notifications';
const MODAL_CARD_CHAT_INVITE = 'chat-invite';

const DynamicModalPage = ({ updateModalHeight, onClose, ...props }) => {
  const platform = usePlatform();
  const { sizeX } = useAdaptivityConditionalRender();
  const [expanded, setExpanded] = React.useState(false);
  const toggle = React.useCallback(() => setExpanded(!expanded), [expanded]);

  return (
    <ModalPage
      {...props}
      header={
        <ModalPageHeader
          before={
            sizeX.compact &&
            platform === 'android' && (
              <PanelHeaderClose className={sizeX.compact.className} onClick={onClose} />
            )
          }
          after={
            sizeX.compact &&
            platform === 'ios' && (
              <PanelHeaderButton className={sizeX.compact.className} onClick={onClose}>
                <Icon24Dismiss />
              </PanelHeaderButton>
            )
          }
        >
          Dynamic modal
        </ModalPageHeader>
      }
    >
      <Group>
        <CellButton onClick={toggle}>{expanded ? 'collapse' : 'expand'}</CellButton>
        {expanded && <Placeholder icon={<Icon56MoneyTransferOutline />} />}
      </Group>
    </ModalPage>
  );
};

const App = () => {
  const { sizeX } = useAdaptivityConditionalRender();
  const { isDesktop } = useAdaptivityWithJSMediaQueries();
  const [activeModal, setActiveModal] = useState(null);
  const [modalHistory, setModalHistory] = useState([]);
  const [randomUser] = useState(() => getRandomUser());
  const [users] = useState(() =>
    'k'
      .repeat(25)
      .split('')
      .map(() => {
        return getRandomUser();
      }),
  );
  const platform = usePlatform();

  const changeActiveModal = (activeModal) => {
    activeModal = activeModal || null;
    let localModalHistory = modalHistory ? [...modalHistory] : [];

    if (activeModal === null) {
      localModalHistory = [];
    } else if (modalHistory.indexOf(activeModal) !== -1) {
      localModalHistory = localModalHistory.splice(0, localModalHistory.indexOf(activeModal) + 1);
    } else {
      localModalHistory.push(activeModal);
    }

    setActiveModal(activeModal);
    setModalHistory(localModalHistory);
  };

  const modalBack = () => {
    changeActiveModal(modalHistory[modalHistory.length - 2]);
  };

  const modal = (
    <ModalRoot activeModal={activeModal} onClose={modalBack}>
      <ModalPage
        id={MODAL_PAGE_FULLSCREEN}
        onClose={modalBack}
        settlingHeight={100}
        hideCloseButton={platform === 'ios'}
        header={
          <ModalPageHeader
            before={
              sizeX.compact &&
              platform === 'android' && (
                <PanelHeaderClose className={sizeX.compact.className} onClick={modalBack} />
              )
            }
            after={
              platform === 'ios' && (
                <PanelHeaderButton onClick={modalBack}>
                  <Icon24Dismiss />
                </PanelHeaderButton>
              )
            }
          >
          </ModalPageHeader>
        }
      >
      </ModalPage>

    </ModalRoot>
  );

  return (
    <SplitLayout modal={modal}>
      <SplitCol>
        <View activePanel="modals">
          <Panel id="modals">
            <PanelHeader>Модальные окна</PanelHeader>
            <Group>
              <CellButton onClick={() => changeActiveModal(MODAL_PAGE_FILTERS)}>
                Открыть модальную страницу
              </CellButton>
              <CellButton multiline onClick={() => changeActiveModal(MODAL_PAGE_FULLSCREEN)}>
                Открыть полноэкранную модальную страницу
              </CellButton>
              <CellButton multiline onClick={() => changeActiveModal(MODAL_PAGE_WITH_FIXED_HEIGHT)}>
                Открыть модальную страницу c фиксированной высотой
              </CellButton>
              <CellButton multiline onClick={() => changeActiveModal(MODAL_PAGE_DYNAMIC)}>
                Открыть модальную страницу с динамической высотой
              </CellButton>
              <CellButton onClick={() => changeActiveModal(MODAL_CARD_MONEY_SEND)}>
                Открыть модальные карточки
              </CellButton>
            </Group>
          </Panel>
        </View>
      </SplitCol>
    </SplitLayout>
  );
};

<App />;