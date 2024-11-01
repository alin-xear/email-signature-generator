function Html() {
  return (
    <>
      <style>{` td { border: 1px solid #222; text-align:center } `}</style>

      <table width="100%">
        <tbody>
          <tr>
            <td colSpan="2">This is full width</td>
          </tr>
          <tr>
            <td width="50%">Left side column</td>
            <td width="50%">Right side column</td>
          </tr>

          <tr>
            <td colSpan="2">
              <table width="100%" cellPadding="0" cellSpacing="0">
                <tbody>
                  <tr>
                    <td colSpan="2">This is NESTED full width</td>
                  </tr>
                  <tr>
                    <td width="50%">
                      <table width="100%">
                        <tbody>
                          <tr>
                            <td width="50%">Left side column NESTED</td>
                            <td width="50%">Right side column NESTED</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                    <td width="50%">
                      <table width="100%">
                        <tbody>
                          <tr>
                            <td width="50%">Left side column NESTED</td>
                            <td width="50%">Right side column NESTED</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Html;
