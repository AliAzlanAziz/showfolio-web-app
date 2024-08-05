import moment from 'moment';

// eslint-disable-next-line react/prop-types
const GenericCard = ({ index, imageURL, from, to, year, title, name, desc, address }) => {
  return (
    <div className="card shadow-lg border-0 rounded-4 mb-5" key={index}>
      <div className="card-body p-2">
        <div className="row align-items-center gx-5 p-3">
          <div className="col-lg-3 order-lg-3 order-1 mb-4 mb-lg-0 d-lg-block d-flex justify-content-center">
            <div className="">
              {imageURL && <img src={imageURL} alt=".." className="card-img-dev" />}
            </div>
          </div>
          <div className="col text-center text-lg-start mb-4 mb-lg-0 order-lg-1 order-2">
            <div className="p-4 bg-theme-light-purple rounded-4">
              {from && to && (
                <div className="text-primary fw-bolder mb-2">
                  {from ? moment(from).format('YYYY') : ''} - {to ? moment(to).format('YYYY') : ''}
                </div>
              )}
              {year &&  (
                <div className="text-primary fw-bolder mb-2">
                  {year ? moment(year).format('YYYY') : ''}
                </div>
              )}
              <div className="mb-2">
                {title && <div className="small fw-bolder">{title}</div>}
              </div>
              <div className="fst-italic">
                {name && <div className="small text-black-50">{name}</div>}
              </div>
              <div className="fst-italic">
                {address && <div className="small text-black-50">{address}</div>}
              </div>
            </div>
          </div>
          <div className="col-lg-6 p-3 order-lg-2 order-3">
            {desc && <div>{desc}</div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenericCard;
